import os
import glob
from PIL import Image

def process_images():
    target_colors = {
        "sage": "#6b7f6a",
        "clay": "#c48464"
        # "terpene": "#5A8B17"
    }

    images = glob.glob("blend-logo-*.png")
    
    for img_path in images:
        if "sage" in img_path or "clay" in img_path or "terpene" in img_path:
            continue
        # if "focus" not in img_path:
        #     continue
        print(f"Processing {img_path}...")
        try:
            img = Image.open(img_path).convert("RGBA")
            data = img.getdata()
            
            # Check if it has an opaque white background or transparent
            # Let's just create an alpha mask based on how dark the pixel is
            # For a pixel: effective alpha = (255 - average(R,G,B)) * (A / 255)
            
            for color_name, target_hex in target_colors.items():
                target_rgb = tuple(int(target_hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
                
                new_data = []
                for r, g, b, a in data:
                    # Let's assume the logo is black/dark grey on transparent or white background.
                    # We want the output to be target_rgb on transparent background.
                    # The "ink" amount is inverse of lightness, scaled by existing alpha.
                    lightness = (r + g + b) / 3.0
                    ink_amount = 1.0 - (lightness / 255.0)
                    
                    # Final alpha is ink_amount * existing_alpha
                    final_a = int((a / 255.0) * ink_amount * 255.0)
                    
                    if final_a > 0:
                        new_data.append((target_rgb[0], target_rgb[1], target_rgb[2], final_a))
                    else:
                        new_data.append((255, 255, 255, 0))
                
                new_img = Image.new("RGBA", img.size)
                new_img.putdata(new_data)

                out_name = f"{img_path.replace('.png', '')}-{color_name}.png"
                new_img.save(out_name, "PNG")
                print(f"  -> Saved {out_name}")
                
        except Exception as e:
            print(f"Error processing {img_path}: {e}")

if __name__ == '__main__':
    process_images()
