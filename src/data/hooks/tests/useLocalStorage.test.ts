import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  })

  const { getLocalStorage, setLocalStorage, STORAGE_KEY } = useLocalStorage();

  it("should return item from localStorage", () => {
    window.localStorage.setItem(`${STORAGE_KEY}key`, JSON.stringify("Felipe"));

    expect(getLocalStorage("key")).toStrictEqual("Felipe");
  });

  it("should add item at localStorage", () => {
    setLocalStorage("key", "Emanuel")

    const data = window.localStorage.getItem(`${STORAGE_KEY}key`)

    expect(data).toStrictEqual(JSON.stringify("Emanuel"));
  })
});
