import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createSignal } from "@motion-canvas/core/lib/signals";
import { Circle, Line, Text } from "@motion-canvas/2d/lib/components";
import { Vector2 } from "@motion-canvas/core/lib/types";
import { createRef } from "@motion-canvas/core/lib/utils";
import { waitUntil } from "@motion-canvas/core/lib/flow";
import { cos, sin } from "@motion-canvas/core/lib/tweening";

const Branch = (config: {
    x: number;
    y: number;
    length: number;
    angle: number;
}) => (
    <Line
        lineWidth={20}
        stroke={"#FFFFFF"}
        points={[
            [config.x, config.y],
            // (x1 + l * cos(ang), y1 + l * sin(ang))
            [
                config.x + config.length * Math.cos(config.angle),
                config.y - config.length * Math.sin(config.angle),
            ],
        ]}
    />
);

export default makeScene2D(function* (view) {
    const height = 1080;
    // <>
    //     <Circle
    //         width={() => radius() * scale * 2}
    //         height={() => radius() * scale * 2}
    //         fontFamily={"JetBrains Mono"}
    //         fill={"#68ABDF"}
    //     />
    //     <Text
    //         ref={areaLabel}
    //         text={() => `A = ${area().toFixed(2)}`}
    //         lineHeight={120}
    //         fontFamily={"JetBrains Mono"}
    //         fill={"#68ABDF"}
    //         y={() => radius() * scale * 1.2}
    //     />
    //     <Line
    //         points={[
    //             Vector2.zero,
    //             () => Vector2.right.scale(radius() * scale),
    //         ]}
    //         lineHeight={20}
    //         fill={"#111111"}
    //     />
    //     <Text
    //         text={() => `r = ${radius().toFixed(2)}`}
    //         x={() => (radius() * scale) / 2}
    //         fontFamily={"JetBrains Mono"}
    //         fill={"#FFFFFF"}
    //     />
    // </>
    view.add(
        <Branch x={0} y={540} length={height / 2} angle={Math.PI * 0.5} />
    );
});
