import { useLocalStorage } from "@/src/data/hooks/useLocalStorage";
import { setPreferences } from "../setPreferences";
import { productMocked } from "@/src/mocks/productMocked";
import { preferences, preferencesUpdated } from "@/src/mocks/preferencesMock";

describe("setPreference", () => {
  const { STORAGE_KEY } = useLocalStorage();
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("should set an item to localStorage at first time", () => {
    //@ts-expect-error produto simplificado
    setPreferences(productMocked[0]);

    const data = window.localStorage.getItem(`${STORAGE_KEY}Preferences`);

    expect(JSON.parse(data!)[0]).toEqual(preferences);
  });

  it("should increment 'qtdVisited'", () => {
    //@ts-expect-error produto simplificado
    setPreferences(productMocked[0]);
    //@ts-expect-error produto simplificado
    setPreferences(productMocked[0]);

    const data = window.localStorage.getItem(`${STORAGE_KEY}Preferences`);

    expect(JSON.parse(data!)[0]).toEqual(preferencesUpdated);
  });
});
