module.exports = {

"[project]/app/test/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'gsap'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'gsap/ScrollTrigger'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'split-type'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@studio-freight/lenis'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
gsap.registerPlugin(ScrollTrigger);
const Test = ()=>{
    const slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize SplitType for the target texts
        const split = new SplitType(".target");
        // Set perspective for each word's chars and animate them on scroll
        split.words.forEach((word)=>{
            gsap.set(word, {
                perspective: 2000
            });
            gsap.fromTo(word.children, {
                willChange: "opacity, transform",
                opacity: 0,
                y: (i, _, arr)=>-40 * Math.abs(i - arr.length / 2),
                z: ()=>gsap.utils.random(-1500, -600),
                rotationX: ()=>gsap.utils.random(-500, -200)
            }, {
                ease: "power1",
                opacity: 1,
                y: 0,
                z: 0,
                rotationX: 0,
                stagger: {
                    each: 0.06,
                    from: "center"
                },
                scrollTrigger: {
                    trigger: word,
                    start: "top bottom",
                    end: "top top+=15px",
                    scrub: true
                }
            });
        });
        // Setup Lenis smooth scrolling
        const lenis = new Lenis({
            lerp: 0.2,
            smooth: true
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        lenis.on("scroll", ScrollTrigger.update);
        // Setup horizontal images background styles
        const images = document.querySelectorAll(".img");
        images.forEach((img, i)=>{
            img.style.backgroundImage = `url(/parallax/p${i + 1}.jpg)`;
            img.style.backgroundSize = "cover";
            img.style.backgroundPosition = "center";
            img.style.backgroundRepeat = "no-repeat";
        });
        // Horizontal scroll width calculation
        const totalScrollWidth = images.length * 520; // image width with margin approx
        const horizontalSection = document.querySelector("#horizontal");
        // GSAP horizontal scroll animation
        gsap.to(slider.current, {
            x: ()=>`-${totalScrollWidth - window.innerWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: horizontalSection,
                start: "top top",
                end: ()=>`+=${totalScrollWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
        return ()=>{
            lenis.destroy();
            ScrollTrigger.getAll().forEach((t)=>t.kill());
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex justify-center items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 w-screen h-[100vh] flex justify-center items-center",
                        children: "SCROLL DOWN FOR THE ANIMATION"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[8vw] text-center font-bold leading-none",
                        style: {
                            marginTop: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "target uppercase block",
                                children: "MOSA"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "target uppercase block",
                                children: "BANDA"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center px-8 mb-[100vh]",
                style: {
                    marginTop: "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[1.2vw] max-w-[700px] text-center leading-loose",
                    children: "Musa Banda is a passionate and determined individual who consistently strives for excellence in everything he does. With a strong sense of purpose and ambition, Musa is deeply committed to both personal growth and making a meaningful impact in his community. He is known for his creativity, leadership, and the ability to bring people together through his positive energy and forward-thinking mindset."
                }, void 0, false, {
                    fileName: "[project]/app/test/page.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "horizontal",
                className: "relative w-full h-screen overflow-hidden bg-white",
                style: {
                    marginTop: "50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: slider,
                    style: {
                        display: "flex",
                        height: "100vh",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        willChange: "transform"
                    },
                    children: [
                        ...Array(5)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "70vh",
                                width: "30rem",
                                margin: "0 2rem",
                                borderRadius: "12px",
                                overflow: "hidden",
                                backgroundColor: "#fff",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                position: "relative",
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.js",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/test/page.js",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/test/page.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Test;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_94f323e5._.js.map