import FlexBox from '/build/dev/default/FlexBox.js';
import Bubble from '/build/dev/default/Bubble.js';

// NOTE: 'bubble'의 경우 'direction'을 'row'로 설정하면 현재 별로 예쁘지 않게 나타난다.
//       하지만, 딱히 'bubble'을 'row'로 나타내는 경우가 없을 것 같아 추가 작업은 하지 않았다.

const flexBox = new FlexBox({
    target: document.getElementById('flex-box'),
    props: {
        direction: "column",

        items: [
            { component: Bubble, message: "안녕하세요?", sender: "user" },
            { component: Bubble, message: "무엇을 도와드릴까요?", sender: "bot" },
            { component: Bubble, message: "흠,... 세상에 쉬운게 하나 없습니다요,...", sender: "user" },
            { component: Bubble, message: "그래도 노력하면 된다고 하죠!", sender: "bot" },
            { component: Bubble, message: "그렇군요. 감사합니다.", sender: "user" },
            { component: Bubble, message: "별말씀을요!", sender: "bot" },
            { component: Bubble, message: "이거 2개줄중 1번째 줄입니다.\n이건 2개줄중 2번째 줄입니다.", sender: "user" }
        ]
    }
});

window.addEventListener('beforeunload', () => flexBox.$destroy());
