import GroupLinesStringParser from "./GroupLinesStringParser";

test('can parse groups seperated by new lines', () => {
    const parser = new GroupLinesStringParser();
    const result = parser.parse('hi\nthis\n\nis\ntwo\ngroups\nthat\n\separate');
    expect(result).toEqual([['hi', 'this'], ['is', 'two', 'groups', 'that', 'separate']]);
});