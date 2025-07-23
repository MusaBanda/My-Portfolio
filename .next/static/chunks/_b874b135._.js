(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/test/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable react-refresh/only-export-components */ __turbopack_context__.s({
    "default": ()=>MetallicPaint,
    "parseLogoImage": ()=>parseLogoImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const defaultParams = {
    patternScale: 2,
    refraction: 0.015,
    edge: 1,
    patternBlur: 0.005,
    liquid: 0.07,
    speed: 0.3
};
function parseLogoImage(file) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    return new Promise((resolve, reject)=>{
        if (!file || !ctx) {
            reject(new Error("Invalid file or context"));
            return;
        }
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = function() {
            if (file.type === "image/svg+xml") {
                img.width = 1000;
                img.height = 1000;
            }
            const MAX_SIZE = 1000;
            const MIN_SIZE = 500;
            let width = img.naturalWidth;
            let height = img.naturalHeight;
            if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
                if (width > height) {
                    if (width > MAX_SIZE) {
                        height = Math.round(height * MAX_SIZE / width);
                        width = MAX_SIZE;
                    } else if (width < MIN_SIZE) {
                        height = Math.round(height * MIN_SIZE / width);
                        width = MIN_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width = Math.round(width * MAX_SIZE / height);
                        height = MAX_SIZE;
                    } else if (height < MIN_SIZE) {
                        width = Math.round(width * MIN_SIZE / height);
                        height = MIN_SIZE;
                    }
                }
            }
            canvas.width = width;
            canvas.height = height;
            const shapeCanvas = document.createElement("canvas");
            shapeCanvas.width = width;
            shapeCanvas.height = height;
            const shapeCtx = shapeCanvas.getContext("2d");
            shapeCtx.drawImage(img, 0, 0, width, height);
            const shapeImageData = shapeCtx.getImageData(0, 0, width, height);
            const data = shapeImageData.data;
            const shapeMask = new Array(width * height).fill(false);
            for(let y = 0; y < height; y++){
                for(let x = 0; x < width; x++){
                    const idx4 = (y * width + x) * 4;
                    const r = data[idx4];
                    const g = data[idx4 + 1];
                    const b = data[idx4 + 2];
                    const a = data[idx4 + 3];
                    shapeMask[y * width + x] = !(r === 255 && g === 255 && b === 255 && a === 255 || a === 0);
                }
            }
            function inside(x, y) {
                if (x < 0 || x >= width || y < 0 || y >= height) return false;
                return shapeMask[y * width + x];
            }
            const boundaryMask = new Array(width * height).fill(false);
            for(let y = 0; y < height; y++){
                for(let x = 0; x < width; x++){
                    const idx = y * width + x;
                    if (!shapeMask[idx]) continue;
                    let isBoundary = false;
                    for(let ny = y - 1; ny <= y + 1 && !isBoundary; ny++){
                        for(let nx = x - 1; nx <= x + 1 && !isBoundary; nx++){
                            if (!inside(nx, ny)) {
                                isBoundary = true;
                            }
                        }
                    }
                    if (isBoundary) {
                        boundaryMask[idx] = true;
                    }
                }
            }
            const interiorMask = new Array(width * height).fill(false);
            for(let y = 1; y < height - 1; y++){
                for(let x = 1; x < width - 1; x++){
                    const idx = y * width + x;
                    if (shapeMask[idx] && shapeMask[idx - 1] && shapeMask[idx + 1] && shapeMask[idx - width] && shapeMask[idx + width]) {
                        interiorMask[idx] = true;
                    }
                }
            }
            const u = new Float32Array(width * height).fill(0);
            const newU = new Float32Array(width * height).fill(0);
            const C = 0.01;
            const ITERATIONS = 300;
            function getU(x, y, arr) {
                if (x < 0 || x >= width || y < 0 || y >= height) return 0;
                if (!shapeMask[y * width + x]) return 0;
                return arr[y * width + x];
            }
            for(let iter = 0; iter < ITERATIONS; iter++){
                for(let y = 0; y < height; y++){
                    for(let x = 0; x < width; x++){
                        const idx = y * width + x;
                        if (!shapeMask[idx] || boundaryMask[idx]) {
                            newU[idx] = 0;
                            continue;
                        }
                        const sumN = getU(x + 1, y, u) + getU(x - 1, y, u) + getU(x, y + 1, u) + getU(x, y - 1, u);
                        newU[idx] = (C + sumN) / 4;
                    }
                }
                u.set(newU);
            }
            let maxVal = 0;
            for(let i = 0; i < width * height; i++){
                if (u[i] > maxVal) maxVal = u[i];
            }
            const alpha = 2.0;
            const outImg = ctx.createImageData(width, height);
            for(let y = 0; y < height; y++){
                for(let x = 0; x < width; x++){
                    const idx = y * width + x;
                    const px = idx * 4;
                    if (!shapeMask[idx]) {
                        outImg.data[px] = 255;
                        outImg.data[px + 1] = 255;
                        outImg.data[px + 2] = 255;
                        outImg.data[px + 3] = 255;
                    } else {
                        const raw = u[idx] / maxVal;
                        const remapped = Math.pow(raw, alpha);
                        const gray = 255 * (1 - remapped);
                        outImg.data[px] = gray;
                        outImg.data[px + 1] = gray;
                        outImg.data[px + 2] = gray;
                        outImg.data[px + 3] = 255;
                    }
                }
            }
            ctx.putImageData(outImg, 0, 0);
            canvas.toBlob((blob)=>{
                if (!blob) {
                    reject(new Error("Failed to create PNG blob"));
                    return;
                }
                resolve({
                    imageData: outImg,
                    pngBlob: blob
                });
            }, "image/png");
        };
        img.onerror = ()=>reject(new Error("Failed to load image"));
        img.src = URL.createObjectURL(file);
    });
}
const vertexShaderSource = "#version 300 es\nprecision mediump float;\n\nin vec2 a_position;\nout vec2 vUv;\n\nvoid main() {\n    vUv = .5 * (a_position + 1.);\n    gl_Position = vec4(a_position, 0.0, 1.0);\n}";
const liquidFragSource = "#version 300 es\nprecision mediump float;\n\nin vec2 vUv;\nout vec4 fragColor;\n\nuniform sampler2D u_image_texture;\nuniform float u_time;\nuniform float u_ratio;\nuniform float u_img_ratio;\nuniform float u_patternScale;\nuniform float u_refraction;\nuniform float u_edge;\nuniform float u_patternBlur;\nuniform float u_liquid;\n\n#define TWO_PI 6.28318530718\n#define PI 3.14159265358979323846\n\nvec3 mod289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec2 mod289(vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec3 permute(vec3 x) { return mod289(((x*34.)+1.)*x); }\nfloat snoise(vec2 v) {\n    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n    vec2 i = floor(v + dot(v, C.yy));\n    vec2 x0 = v - i + dot(i, C.xx);\n    vec2 i1;\n    i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod289(i);\n    vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.);\n    m = m*m;\n    m = m*m;\n    vec3 x = 2. * fract(p * C.www) - 1.;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n    vec3 g;\n    g.x = a0.x * x0.x + h.x * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130. * dot(m, g);\n}\n\nvec2 get_img_uv() {\n    vec2 img_uv = vUv;\n    img_uv -= .5;\n    if (u_ratio > u_img_ratio) {\n        img_uv.x = img_uv.x * u_ratio / u_img_ratio;\n    } else {\n        img_uv.y = img_uv.y * u_img_ratio / u_ratio;\n    }\n    float scale_factor = 1.;\n    img_uv *= scale_factor;\n    img_uv += .5;\n    img_uv.y = 1. - img_uv.y;\n    return img_uv;\n}\nvec2 rotate(vec2 uv, float th) {\n    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;\n}\nfloat get_color_channel(float c1, float c2, float stripe_p, vec3 w, float extra_blur, float b) {\n    float ch = c2;\n    float border = 0.;\n    float blur = u_patternBlur + extra_blur;\n    ch = mix(ch, c1, smoothstep(.0, blur, stripe_p));\n    border = w[0];\n    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));\n    b = smoothstep(.2, .8, b);\n    border = w[0] + .4 * (1. - b) * w[1];\n    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));\n    border = w[0] + .5 * (1. - b) * w[1];\n    ch = mix(ch, c2, smoothstep(border - blur, border + blur, stripe_p));\n    border = w[0] + w[1];\n    ch = mix(ch, c1, smoothstep(border - blur, border + blur, stripe_p));\n    float gradient_t = (stripe_p - w[0] - w[1]) / w[2];\n    float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));\n    ch = mix(ch, gradient, smoothstep(border - blur, border + blur, stripe_p));\n    return ch;\n}\nfloat get_img_frame_alpha(vec2 uv, float img_frame_width) {\n    float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);\n    img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);\n    return img_frame_alpha;\n}\nvoid main() {\n    vec2 uv = vUv;\n    uv.y = 1. - uv.y;\n    uv.x *= u_ratio;\n    float diagonal = uv.x - uv.y;\n    float t = .001 * u_time;\n    vec2 img_uv = get_img_uv();\n    vec4 img = texture(u_image_texture, img_uv);\n    vec3 color = vec3(0.);\n    float opacity = 1.;\n    vec3 color1 = vec3(.98, 0.98, 1.);\n    vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, uv.x + uv.y));\n    float edge = img.r;\n    vec2 grad_uv = uv;\n    grad_uv -= .5;\n    float dist = length(grad_uv + vec2(0., .2 * diagonal));\n    grad_uv = rotate(grad_uv, (.25 - .2 * diagonal) * PI);\n    float bulge = pow(1.8 * dist, 1.2);\n    bulge = 1. - bulge;\n    bulge *= pow(uv.y, .3);\n    float cycle_width = u_patternScale;\n    float thin_strip_1_ratio = .12 / cycle_width * (1. - .4 * bulge);\n    float thin_strip_2_ratio = .07 / cycle_width * (1. + .4 * bulge);\n    float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);\n    float thin_strip_1_width = cycle_width * thin_strip_1_ratio;\n    float thin_strip_2_width = cycle_width * thin_strip_2_ratio;\n    opacity = 1. - smoothstep(.9 - .5 * u_edge, 1. - .5 * u_edge, edge);\n    opacity *= get_img_frame_alpha(img_uv, 0.01);\n    float noise = snoise(uv - t);\n    edge += (1. - edge) * u_liquid * noise;\n    float refr = 0.;\n    refr += (1. - bulge);\n    refr = clamp(refr, 0., 1.);\n    float dir = grad_uv.x;\n    dir += diagonal;\n    dir -= 2. * noise * diagonal * (smoothstep(0., 1., edge) * smoothstep(1., 0., edge));\n    bulge *= clamp(pow(uv.y, .1), .3, 1.);\n    dir *= (.1 + (1.1 - edge) * bulge);\n    dir *= smoothstep(1., .7, edge);\n    dir += .18 * (smoothstep(.1, .2, uv.y) * smoothstep(.4, .2, uv.y));\n    dir += .03 * (smoothstep(.1, .2, 1. - uv.y) * smoothstep(.4, .2, 1. - uv.y));\n    dir *= (.5 + .5 * pow(uv.y, 2.));\n    dir *= cycle_width;\n    dir -= t;\n    float refr_r = refr;\n    refr_r += .03 * bulge * noise;\n    float refr_b = 1.3 * refr;\n    refr_r += 5. * (smoothstep(-.1, .2, uv.y) * smoothstep(.5, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(1., .4, bulge));\n    refr_r -= diagonal;\n    refr_b += (smoothstep(0., .4, uv.y) * smoothstep(.8, .1, uv.y)) * (smoothstep(.4, .6, bulge) * smoothstep(.8, .4, bulge));\n    refr_b -= .2 * edge;\n    refr_r *= u_refraction;\n    refr_b *= u_refraction;\n    vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);\n    w[1] -= .02 * smoothstep(.0, 1., edge + bulge);\n    float stripe_r = mod(dir + refr_r, 1.);\n    float r = get_color_channel(color1.r, color2.r, stripe_r, w, 0.02 + .03 * u_refraction * bulge, bulge);\n    float stripe_g = mod(dir, 1.);\n    float g = get_color_channel(color1.g, color2.g, stripe_g, w, 0.01 / (1. - diagonal), bulge);\n    float stripe_b = mod(dir - refr_b, 1.);\n    float b = get_color_channel(color1.b, color2.b, stripe_b, w, .01, bulge);\n    color = vec3(r, g, b);\n    color *= opacity;\n    fragColor = vec4(color, opacity);\n}\n";
function MetallicPaint(param) {
    let { imageData, params = defaultParams } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gl, setGl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uniforms, setUniforms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const totalAnimationTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastRenderTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    function updateUniforms() {
        if (!gl || !uniforms) return;
        gl.uniform1f(uniforms.u_edge, params.edge);
        gl.uniform1f(uniforms.u_patternBlur, params.patternBlur);
        gl.uniform1f(uniforms.u_time, 0);
        gl.uniform1f(uniforms.u_patternScale, params.patternScale);
        gl.uniform1f(uniforms.u_refraction, params.refraction);
        gl.uniform1f(uniforms.u_liquid, params.liquid);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetallicPaint.useEffect": ()=>{
            var _s = __turbopack_context__.k.signature();
            function initShader() {
                _s();
                const canvas = canvasRef.current;
                const gl = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("webgl2", {
                    antialias: true,
                    alpha: true
                });
                if (!canvas || !gl) {
                    return;
                }
                function createShader(gl, sourceCode, type) {
                    const shader = gl.createShader(type);
                    if (!shader) {
                        return null;
                    }
                    gl.shaderSource(shader, sourceCode);
                    gl.compileShader(shader);
                    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
                        gl.deleteShader(shader);
                        return null;
                    }
                    return shader;
                }
                const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
                const fragmentShader = createShader(gl, liquidFragSource, gl.FRAGMENT_SHADER);
                const program = gl.createProgram();
                if (!program || !vertexShader || !fragmentShader) {
                    return;
                }
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
                    return null;
                }
                function getUniforms(program, gl) {
                    let uniforms = {};
                    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                    for(let i = 0; i < uniformCount; i++){
                        var _gl_getActiveUniform;
                        let uniformName = (_gl_getActiveUniform = gl.getActiveUniform(program, i)) === null || _gl_getActiveUniform === void 0 ? void 0 : _gl_getActiveUniform.name;
                        if (!uniformName) continue;
                        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                    }
                    return uniforms;
                }
                const uniforms = getUniforms(program, gl);
                setUniforms(uniforms);
                const vertices = new Float32Array([
                    -1,
                    -1,
                    1,
                    -1,
                    -1,
                    1,
                    1,
                    1
                ]);
                const vertexBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
                gl.useProgram(program);
                const positionLocation = gl.getAttribLocation(program, "a_position");
                gl.enableVertexAttribArray(positionLocation);
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
                gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
                setGl(gl);
            }
            _s(initShader, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", true);
            initShader();
            updateUniforms();
        }
    }["MetallicPaint.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetallicPaint.useEffect": ()=>{
            if (!gl || !uniforms) return;
            updateUniforms();
        }
    }["MetallicPaint.useEffect"], [
        gl,
        params,
        uniforms
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetallicPaint.useEffect": ()=>{
            if (!gl || !uniforms) return;
            let renderId;
            function render(currentTime) {
                const deltaTime = currentTime - lastRenderTime.current;
                lastRenderTime.current = currentTime;
                totalAnimationTime.current += deltaTime * params.speed;
                gl.uniform1f(uniforms.u_time, totalAnimationTime.current);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                renderId = requestAnimationFrame(render);
            }
            lastRenderTime.current = performance.now();
            renderId = requestAnimationFrame(render);
            return ({
                "MetallicPaint.useEffect": ()=>{
                    cancelAnimationFrame(renderId);
                }
            })["MetallicPaint.useEffect"];
        }
    }["MetallicPaint.useEffect"], [
        gl,
        params.speed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetallicPaint.useEffect": ()=>{
            const canvasEl = canvasRef.current;
            if (!canvasEl || !gl || !uniforms) return;
            function resizeCanvas() {
                if (!canvasEl || !gl || !uniforms || !imageData) return;
                const imgRatio = imageData.width / imageData.height;
                gl.uniform1f(uniforms.u_img_ratio, imgRatio);
                const side = 1000;
                canvasEl.width = side * devicePixelRatio;
                canvasEl.height = side * devicePixelRatio;
                gl.viewport(0, 0, canvasEl.height, canvasEl.height);
                gl.uniform1f(uniforms.u_ratio, 1);
                gl.uniform1f(uniforms.u_img_ratio, imgRatio);
            }
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "MetallicPaint.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                }
            })["MetallicPaint.useEffect"];
        }
    }["MetallicPaint.useEffect"], [
        gl,
        uniforms,
        imageData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetallicPaint.useEffect": ()=>{
            if (!gl || !uniforms) return;
            const existingTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
            if (existingTexture) {
                gl.deleteTexture(existingTexture);
            }
            const imageTexture = gl.createTexture();
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, imageTexture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
            try {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imageData === null || imageData === void 0 ? void 0 : imageData.width, imageData === null || imageData === void 0 ? void 0 : imageData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData === null || imageData === void 0 ? void 0 : imageData.data);
                gl.uniform1i(uniforms.u_image_texture, 0);
            } catch (e) {
                console.error("Error uploading texture:", e);
            }
            return ({
                "MetallicPaint.useEffect": ()=>{
                    if (imageTexture) {
                        gl.deleteTexture(imageTexture);
                    }
                }
            })["MetallicPaint.useEffect"];
        }
    }["MetallicPaint.useEffect"], [
        gl,
        uniforms,
        imageData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "block w-full h-full object-contain"
    }, void 0, false, {
        fileName: "[project]/app/test/page.js",
        lineNumber: 582,
        columnNumber: 5
    }, this);
}
_s(MetallicPaint, "8rX5aFPgAMCNMtmiY7MFLSUAiAQ=");
_c = MetallicPaint;
var _c;
__turbopack_context__.k.register(_c, "MetallicPaint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_b874b135._.js.map