describe("Consulta", function() {
    var guilherme;
    beforeEach(()=>{
        guilherme = new PacienteBuilder().comAltura(1.80).constroi();
    });

    describe("Consulta do tipo retorno", function() {
        it("nao deve cobrar nada se a consulta for um retorno", function() {
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });


    describe("Consulta com procedimento", function() {
        it("deve cobrar 25 por cada procedimento comum", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
            expect(consulta.preco()).toEqual(50);
        });
    
        it("deve dobrar o preco da consulta particular", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);
            expect(consulta.preco()).toEqual(50 * 2);
        });
    
        it("deve cobrar preco especifico dependendo do procedimento", function() {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });
});