import FlexBox from '/build/dev/default/FlexBox.js';
import Card from '/build/dev/default/Card.js';

const flexBox = new FlexBox({
    target: document.getElementById('flex-box'),
    props: {
        direction: "column",

        // TODO: 'Tailwind CSS' 적용 고려
        //
        // 이렇게 일일이 속성을 스타일링 해주는 것보다는 Tailwind CSS를 적용할 수 있는 구조를 만드는 것이
        // 유용할 것 같음.
        defaultItemProps: {
            component: Card,
            foldable: true,
            customEvents: ["cardFolding"],

            width: "300px",
            margin: "1px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "none"
        },

        items: [
            { title: "Feature 1", body: "Feature 1 is a very useful feature.", height: "100px" },
            { title: "Feature 2", body: "Feature 2 is a super useful feature.", height: "100px" },
            { title: "Feature 3", body: "피처 3은 온갖 환경 조건에서도 아주 유연하게 동작할 수 있는 기능입니다." },
            { title: "Feature 4", body: "피처 4는 피쳐 3보다 더욱 유연하게 동작할 수 있는 기능입니다. 너무 너무 좋은 기능입니다. 한번 꼭 사용해보길 권장해드립니다." },
            { title: "Feature 5", body: "피처 5는 미친 기능입니다. 안 쓰고는 못 견디실 겁니다." },
            { foldable: false, title: "Feature 6", body: "피처 6은 완벽한 기능이라할 수 있습니다." }
        ]
    }
});

flexBox.$on("cardFolding", (e) => {
    console.log(e.detail);
});

window.addEventListener('beforeunload', () => flexBox.$destroy());
