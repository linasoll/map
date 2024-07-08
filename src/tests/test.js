/* eslint-disable no-undef */
import { ErrorRepository } from "../file";

test("Добавление ошибки", () => {
    const errRep = new ErrorRepository;
    errRep.addError(404, "Not found");
    expect(errRep.errors.has(404)).toBe(true)
})

test("Существующая ошибка", () => {
    const errRep = new ErrorRepository;
    errRep.addError(404, "Not found");
    expect(errRep.translate(404)).toBe("Not found")
})

test("Несуществующая ошибка", () => {
    const errRep = new ErrorRepository;
    errRep.addError(404, "Not found");
    expect(errRep.translate(1234)).toBe("Unknown error")
})