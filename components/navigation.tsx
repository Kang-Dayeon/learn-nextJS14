"use client"
// 이 component는 client에서 interactive해야된다고 정하는것
// 그렇다고 client에서 render되지는 않음. server에서 render됨
// Hydration 된다라고 말함 = 단순 HTML을 React application으로 초기화 하는 작업

import Link from "next/link";
// next에서 제공하는 hook으로 url을 읽을 수 있음
import {usePathname} from "next/navigation";

export default function Navigation(){
    const path = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🌠" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🌠" : ""}
                </li>
            </ul>
        </nav>
    )
}