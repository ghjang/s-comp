// NOTE: '노드의 style 속성'의 하위 속성인 'display CSS 속성'만을 감시하는 방법은 없다고 함.
export function styleObserver(node, callback) {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const computedStyle = window.getComputedStyle(node);
                callback(computedStyle);
            }
        }
    });

    observer.observe(node, { attributes: true, attributeFilter: ['style'] });

    return {
        destroy() {
            observer.disconnect();
        }
    };
}