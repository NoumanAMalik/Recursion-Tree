import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, View2D} from "@motion-canvas/2d/lib/components";
import {createRef, Reference, range, makeRef} from "@motion-canvas/core/lib/utils";
import {all} from "@motion-canvas/core/lib/flow";
import {Line, Layout} from "@motion-canvas/2d/lib/components";

export default makeScene2D(function* (view) {
  // Create your animations here
  const lineRefs: Line[] = [];

  view.add(
    <Layout>
      {range(10).map(i => (
        <Line
            ref={makeRef(lineRefs, i)}
            lineWidth={10}
            stroke={"#fff"}
            points={[
              [0 + i*20,-600],
              [0 + i*20,600]
            ]}
        />
      ))}
    </Layout>
  )

  // refArray.push(makeBranch([0, 600], view))


  // yield * all (
  //     myCircle().position.x(300, 1).to(-300, 1),
  //     myCircle().fill('#e6a700', 1).to('#e13238', 1),
  // )
});


// const makeBranch = (start: [number, number], view: View2D): Line => {
//   const currentRef = createRef<Line>();
//
//   return (<Line />)
// }