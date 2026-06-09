import { NextRequest } from "next/server";
import { middleware } from "./middleware";
import { expect, test, describe } from "bun:test";

describe("middleware redirect tests", () => {
  test("redirects valid label fresh-01 to /produkt/fresh", () => {
    const req = new NextRequest("http://localhost:3000/?label=fresh");
    const res = middleware(req);
    expect(res).toBeDefined();
    expect(res?.status).toBe(302);
    expect(res?.headers.get("location")).toBe(
      "http://localhost:3000/produkt/fresh",
    );
  });

  test("redirects valid terpene label sleep-terpene-xyz to /produkt/sleep-terpene", () => {
    const req = new NextRequest("http://localhost:3000/?label=sleep-terpene");
    const res = middleware(req);
    expect(res).toBeDefined();
    expect(res?.status).toBe(302);
    expect(res?.headers.get("location")).toBe(
      "http://localhost:3000/produkt/sleep-terpene",
    );
  });

  test("redirects discovery-pack label to /store", () => {
    const req = new NextRequest("http://localhost:3000/?label=zestaw-startowy");
    const res = middleware(req);
    expect(res).toBeDefined();
    expect(res?.status).toBe(302);
    expect(res?.headers.get("location")).toBe("http://localhost:3000/store");
  });

  test("redirects unknown label to /store", () => {
    const req = new NextRequest("http://localhost:3000/?label=nonexistent");
    const res = middleware(req);
    expect(res).toBeDefined();
    expect(res?.status).toBe(302);
    expect(res?.headers.get("location")).toBe("http://localhost:3000/store");
  });

  test("redirects empty label to /store", () => {
    const req = new NextRequest("http://localhost:3000/?label=");
    const res = middleware(req);
    expect(res).toBeDefined();
    expect(res?.status).toBe(302);
    expect(res?.headers.get("location")).toBe("http://localhost:3000/store");
  });

  test("passes through if no label parameter", () => {
    const req = new NextRequest("http://localhost:3000/");
    const res = middleware(req);
    // NextResponse.next() returns a response with header 'x-middleware-next: 1'
    expect(res).toBeDefined();
    expect(res?.headers.get("x-middleware-next")).toBe("1");
  });
});
