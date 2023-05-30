var $lsnuL$studiofreightlenis = require("@studio-freight/lenis");
var $lsnuL$react = require("react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $43d7963e56408b24$export$2e2bcd8739ae039);
$parcel$export(module.exports, "getWindow", () => $004a9f865b5a40f6$export$38b2d434cce3ea22);
$parcel$export(module.exports, "getDocument", () => $004a9f865b5a40f6$export$f65ca476c09acec0);
$parcel$export(module.exports, "getTransformProperties", () => $004a9f865b5a40f6$export$4bc4513f7604a920);
$parcel$export(module.exports, "scrollTrigger", () => $004a9f865b5a40f6$export$f7be23f196c4b448);
$parcel$export(module.exports, "getRectangle", () => $004a9f865b5a40f6$export$c32a249941905394);
$parcel$export(module.exports, "isVisible", () => $004a9f865b5a40f6$export$795910f5f15a9633);
$parcel$export(module.exports, "isElement", () => $004a9f865b5a40f6$export$45a5e7f76e0caa8d);
$parcel$export(module.exports, "isTypoReady", () => $004a9f865b5a40f6$export$e66b41dc920d27ac);
$parcel$export(module.exports, "useOutsideClick", () => $bd85f14c08c848dd$export$71b2224f1ce5e08e);
$parcel$export(module.exports, "useMediaQuery", () => $a826c1f9439d3f2a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "useMutationObserver", () => $e39b72d72974fcd0$export$2e2bcd8739ae039);
$parcel$export(module.exports, "useSearch", () => $560db78f9b63b7eb$export$2e2bcd8739ae039);
$parcel$export(module.exports, "useSmoothScroll", () => $7069732aefd3a07f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "useWindowSize", () => $4711f42f0532cc6e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "lenis", () => ($parcel$interopDefault($lsnuL$studiofreightlenis)));
const $004a9f865b5a40f6$export$c32a249941905394 = (element)=>{
    const object = element.getBoundingClientRect();
    object.relativeRight = window.innerWidth - object.right;
    object.relativeBottom = window.innerHeight - object.bottom;
    return object;
};
const $004a9f865b5a40f6$export$795910f5f15a9633 = (element)=>{
    const object = element.getBoundingClientRect();
    return object.top < $004a9f865b5a40f6$export$38b2d434cce3ea22().innerHeight && object.bottom > 0;
};
const $004a9f865b5a40f6$export$45a5e7f76e0caa8d = (element)=>{
    return typeof HTMLElement === "object" ? element instanceof HTMLElement : element && typeof element === "object" && element !== null && element.nodeType === 1 && typeof element.nodeName === "string";
};
async function $004a9f865b5a40f6$export$e66b41dc920d27ac() {
    let ready = await $004a9f865b5a40f6$export$f65ca476c09acec0().fonts.ready;
}
const $004a9f865b5a40f6$export$f7be23f196c4b448 = (props, customFunction)=>{
    let { triggerElement: triggerElement , timeline: timeline , end: end , pin: pin , pinEnd: pinEnd  } = props;
    // In this function we would like to create the behavior of the ScrollTrigger
    // First we init the behavior
    let pinElement = false;
    let initialHeight = false;
    triggerElement = $004a9f865b5a40f6$export$45a5e7f76e0caa8d(triggerElement) ? triggerElement : $004a9f865b5a40f6$export$f65ca476c09acec0().querySelector(triggerElement);
    initialHeight = $004a9f865b5a40f6$export$c32a249941905394(triggerElement).height;
    triggerElement.style.height = initialHeight + end + "px";
    triggerElement.style.position = "relative";
    let rectElement = ()=>$004a9f865b5a40f6$export$c32a249941905394(triggerElement);
    pinElement = pin ? triggerElement.querySelector(".pin") : false;
    $004a9f865b5a40f6$export$f65ca476c09acec0().addEventListener("scroll", ()=>{
        if (pinElement && -rectElement().top >= 0) {
            if (!pinEnd) {
                if (-rectElement().top <= rectElement().height - $004a9f865b5a40f6$export$c32a249941905394(pinElement).height) {
                    // pinElement.style.transform = `translateY(${- rectElement().top}px)`;
                    pinElement.style.position = "fixed";
                    pinElement.style.transform = ``;
                    pinElement.style.top = "0px";
                    pinElement.style.left = "0px";
                } else {
                    pinElement.style.transform = `translateY(${rectElement().height - $004a9f865b5a40f6$export$c32a249941905394(pinElement).height}px)`;
                    pinElement.style.position = ``;
                }
            }
            if (pinEnd) {
                pinElement.style.position = "fixed";
                pinElement.style.transform = ``;
                pinElement.style.top = "0px";
                pinElement.style.left = "0px";
            }
        } else if (pinElement) {
            pinElement.style.transform = ``;
            pinElement.style.position = ``;
        }
        if (customFunction) customFunction({
            fullProgress: -rectElement().top / rectElement().height,
            progress: -rectElement().top / (rectElement().height - window.innerHeight)
        });
    });
};
const $004a9f865b5a40f6$export$4bc4513f7604a920 = (element)=>{
    // Récupération de la valeur de la propriété "transform" de l'élément
    const transform = window.getComputedStyle(element).transform;
    // Création de l'objet de résultat
    const result = {};
    // Si la propriété "transform" existe et n'est pas vide
    if (transform && transform !== "none") {
        // Séparation des différentes transformations
        const transforms = transform.match(/\(([^)]+)\)/)[1].split(", ");
        return {
            transformX: transforms[4],
            transformY: transforms[5]
        };
    }
    // Renvoi de l'objet de résultat
    return result;
};
const $004a9f865b5a40f6$export$f65ca476c09acec0 = ()=>{
    let currentDOM;
    let location = window.location.host;
    switch(location){
        case "localhost:3333":
            currentDOM = document.querySelector('iframe[data-preview="true"]').contentWindow.document;
            break;
        case "scc-france-sanity.netlify.app":
            currentDOM = document.querySelector('iframe[data-preview="true"]').contentWindow.document;
            break;
        default:
            currentDOM = document;
            break;
    }
    return currentDOM;
};
const $004a9f865b5a40f6$export$38b2d434cce3ea22 = ()=>{
    let currentWindow;
    let location = window.location.host;
    let iframe;
    switch(location){
        case "localhost:3333":
            iframe = document.querySelector('iframe[data-preview="true"]');
            currentWindow = iframe ? iframe.contentWindow : window;
            break;
        case "scc-france-sanity.netlify.app":
            iframe = document.querySelector('iframe[data-preview="true"]');
            currentWindow = iframe ? iframe.contentWindow : window;
            break;
        default:
            currentWindow = window;
            break;
    }
    return currentWindow;
};



/**
 * @author Émilien VIVIER
 * @brief React hook which run callBack if click outside component
 * @param ref of the component we want to listen
 * @param callBack to run if click outside
 */ 
const $bd85f14c08c848dd$export$71b2224f1ce5e08e = (ref, callBack)=>{
    (0, ($parcel$interopDefault($lsnuL$react))).useEffect(()=>{
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) callBack();
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref
    ]);
};



const $a826c1f9439d3f2a$var$useMediaQuery = (query)=>{
    const [matches, setMatches] = (0, $lsnuL$react.useState)(false);
    (0, $lsnuL$react.useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = ()=>setMatches(media.matches);
        window.addEventListener("resize", listener);
        return ()=>window.removeEventListener("resize", listener);
    }, [
        matches,
        query
    ]);
    return matches;
};
var $a826c1f9439d3f2a$export$2e2bcd8739ae039 = $a826c1f9439d3f2a$var$useMediaQuery;



const $e39b72d72974fcd0$var$useMutationObserver = (ref, callback, options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
})=>{
    (0, ($parcel$interopDefault($lsnuL$react))).useEffect(()=>{
        if (ref.current) {
            const observer = new MutationObserver(callback);
            observer.observe(ref.current, options);
            return ()=>observer.disconnect();
        }
    }, [
        callback,
        options
    ]);
};
var $e39b72d72974fcd0$export$2e2bcd8739ae039 = $e39b72d72974fcd0$var$useMutationObserver;


/**
 * @author Donaël Walter
 * @brief React hook who manage the logic search from an json endpoint return the result
 * @param endpoint
 * @param input
 */ 
function $ba1f45fc51e4a3e8$export$3a89f8d6f6bf6c9f(p1, p2, t) {
    return p1 + (p2 - p1) * t;
}
function $ba1f45fc51e4a3e8$export$c07234257a03d5e9(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
function $ba1f45fc51e4a3e8$export$89e29e4ab65e70a9(start, end, value) {
    return start * (1.0 - value) + end * value;
}
function $ba1f45fc51e4a3e8$export$7d15b64cf5a3a4c4(min, max, number) {
    return Math.max(min, Math.min(number, max));
}
function $ba1f45fc51e4a3e8$export$4385e60b38654f68(min, max) {
    return Math.random() * (max - min) + min;
}
function $ba1f45fc51e4a3e8$export$b944ac7a98f38130(x, total) {
    return total * x / 100;
}
function $ba1f45fc51e4a3e8$export$8a3be89cd00fc7e6(x, total) {
    return x * 100 / total;
}
function $ba1f45fc51e4a3e8$export$b6b410691a49e495(a, b, c) {
    return c * b / a;
}
function $ba1f45fc51e4a3e8$export$edf8ac017ca4b6f0(eValue, rValue) {
    if (!rValue) return eValue && eValue;
    return eValue ? eValue : rValue;
}
function $ba1f45fc51e4a3e8$export$fc99885b7e473d08(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
function $ba1f45fc51e4a3e8$export$2e2262a44ac61957(arr) {
    return arr.filter((item, index)=>arr.indexOf(item) === index);
}
function $ba1f45fc51e4a3e8$export$536f0b5b8273277(arr) {
    return JSON.parse(JSON.stringify(arr));
}


const $560db78f9b63b7eb$export$bd221a7c56b93941 = (endpoint, input)=>{
    const [endpointsResults, setEndPointResults] = (0, $lsnuL$react.useState)({});
    const [searchResults, setSearchResults] = (0, $lsnuL$react.useState)([]);
    const [isLoading, setIsLoading] = (0, $lsnuL$react.useState)(false);
    const [value, setValue] = (0, $lsnuL$react.useState)("");
    const handleInputChange = (event, type)=>{
        let value = event.target.value ? event.target.value : "";
        setValue(value);
        endpointsResults.pages.forEach((el)=>{
            el.lvl = null;
        });
        setTimeout(()=>{
            if (endpointsResults.priority && value.length > 0) {
                let resultsArray = [];
                for(let index = 0; index < endpointsResults.priority.length; index++){
                    const element = endpointsResults.priority[index];
                    let currentResults = [
                        ...endpointsResults.pages
                    ].filter((property)=>{
                        const check = ()=>{
                            return property[element] ? property[element].toLowerCase().includes(value.toLowerCase()) : false;
                        };
                        if (!property.lvl && check()) property.lvl = element;
                        return check();
                    });
                    resultsArray = [
                        ...resultsArray,
                        ...currentResults
                    ];
                    resultsArray = (0, $ba1f45fc51e4a3e8$export$2e2262a44ac61957)(resultsArray);
                    setSearchResults(resultsArray);
                }
            } else setSearchResults([]);
        }, 50);
    };
    (0, $lsnuL$react.useEffect)(()=>{
        // set the state to loading
        setIsLoading(true);
        // fetch the data we need
        fetch(endpoint).then((response)=>response.json()).then((data)=>{
            // set the enpointsResults
            setEndPointResults(data);
            setEndPointResults((data)=>{
                return data;
            });
            // set the loading state to false
            setIsLoading(false);
        }).catch(()=>{
            // error
            // set the error value
            // set the loading false
            setIsLoading(false);
        });
    }, []);
    (0, $lsnuL$react.useEffect)(()=>{
        if (input && input.current) {
            input.current.addEventListener("keyup", (event)=>{
                handleInputChange(event, "keyup");
            });
            // inititalise input event
            input.current.addEventListener("keydown", (event)=>{
                handleInputChange(event, "keydown");
            });
            // onChange
            input.current.addEventListener("change", (event)=>{
                handleInputChange(event, "change");
            });
            // onBlur
            input.current.addEventListener("blur", (event)=>{
                handleInputChange(event, "blur");
            });
        }
    }, [
        endpointsResults,
        input
    ]);
    return {
        state: isLoading,
        initial: endpointsResults,
        results: searchResults,
        value: value
    };
};
var $560db78f9b63b7eb$export$2e2bcd8739ae039 = $560db78f9b63b7eb$export$bd221a7c56b93941;




const $0796ee607218904f$var$eventBus = {
    on (event, callback) {
        document.addEventListener(event, (e)=>callback(e.detail));
    },
    dispatch (event, data) {
        document.dispatchEvent(new CustomEvent(event, {
            detail: data
        }));
    },
    remove (event, callback) {
        document.removeEventListener(event, callback);
    }
};
var $0796ee607218904f$export$2e2bcd8739ae039 = $0796ee607218904f$var$eventBus;


function $7069732aefd3a07f$var$useSmoothScroll() {
    const [lenis, setLenis] = (0, ($parcel$interopDefault($lsnuL$react))).useState(null);
    (0, ($parcel$interopDefault($lsnuL$react))).useLayoutEffect(()=>{
        if (window.lenis) return window.lenis;
        const l = new (0, ($parcel$interopDefault($lsnuL$studiofreightlenis)))({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2
        });
        setLenis(l);
        const scrollFn = (time)=>{
            l.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
        window.lenis = l;
        (0, $0796ee607218904f$export$2e2bcd8739ae039).dispatch("lenisLoaded", {
            isLoaded: true
        });
        l?.stop();
        return lenis?.destroy();
    }, []);
    return lenis;
}
var $7069732aefd3a07f$export$2e2bcd8739ae039 = $7069732aefd3a07f$var$useSmoothScroll;




const $4711f42f0532cc6e$var$getSize = ()=>{
    return {
        innerHeight: (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().innerHeight,
        innerWidth: (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().innerWidth,
        outerHeight: (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().outerHeight,
        outerWidth: (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().outerWidth
    };
};
const $4711f42f0532cc6e$var$useWindowSize = ()=>{
    const [windowSize, setWindowSize] = $lsnuL$react.useState({});
    const handleResize = ()=>{
        setWindowSize($4711f42f0532cc6e$var$getSize());
    };
    $lsnuL$react.useEffect(()=>{
        (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            (0, $004a9f865b5a40f6$export$38b2d434cce3ea22)().removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
};
var $4711f42f0532cc6e$export$2e2bcd8739ae039 = $4711f42f0532cc6e$var$useWindowSize;


const $43d7963e56408b24$var$gongju = {
    getRectangle: $004a9f865b5a40f6$export$c32a249941905394,
    isVisible: $004a9f865b5a40f6$export$795910f5f15a9633,
    isElement: $004a9f865b5a40f6$export$45a5e7f76e0caa8d,
    isTypoReady: $004a9f865b5a40f6$export$e66b41dc920d27ac,
    scrollTrigger: $004a9f865b5a40f6$export$f7be23f196c4b448,
    getTransformProperties: $004a9f865b5a40f6$export$4bc4513f7604a920,
    getDocument: $004a9f865b5a40f6$export$f65ca476c09acec0,
    getWindow: $004a9f865b5a40f6$export$38b2d434cce3ea22,
    useOutsideClick: $bd85f14c08c848dd$export$71b2224f1ce5e08e,
    useMediaQuery: $a826c1f9439d3f2a$export$2e2bcd8739ae039,
    useMutationObserver: $e39b72d72974fcd0$export$2e2bcd8739ae039,
    useSearch: $560db78f9b63b7eb$export$2e2bcd8739ae039,
    useSmoothScroll: $7069732aefd3a07f$export$2e2bcd8739ae039,
    useWindowSize: $4711f42f0532cc6e$export$2e2bcd8739ae039,
    lenis: ($parcel$interopDefault($lsnuL$studiofreightlenis))
};
var $43d7963e56408b24$export$2e2bcd8739ae039 = $43d7963e56408b24$var$gongju;


//# sourceMappingURL=gongju.js.map
