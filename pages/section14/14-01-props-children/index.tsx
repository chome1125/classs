import Example from "../../../src/components/units/14-props-children-example";

export default function propsChildrenPage(): JSX.Element {
  return (
    <Example school="다람쥐초등학교">
      <div>
        <input type="text" />
        <div>저는 철수입니다</div>
        <button>클릭해주세요!</button>
      </div>
    </Example>
  );
}
