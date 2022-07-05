class DispositivoEletronico {
    constructor(marca, modelo, serialNumber) {
        this.marca = marca;
        this.modelo = modelo;
        this.serialNumber = serialNumber;

        this.suportaChip = false;
    }
}

class Celular extends DispositivoEletronico {
    constructor(marca, modelo, serialNumber, numeroTelefone) {
        super(marca, modelo, serialNumber);
        this.numeroTelefone = numeroTelefone;

        this.suportaChip = true;
    }
}

class WhatsApp {
    static dispositivosCadastrados = [];

    static cadastrarNovoDispositivo(dispositivo, nome, celular) {
        const verificarDispositivo = this.dispositivosCadastrados.find(
            (elem) => elem.serialNumber === dispositivo
        );
        if (verificarDispositivo) {
            return "Dispositivo já cadastrado!";
        }
        if (verificarDispositivo.suportaChip === true) {
            this.dispositivosCadastrados.push({
                dispositivo: dispositivo,
                nome: nome,
                numeroTelefone: this.numeroTelefone,
            });
            return "Dispositivo cadastrado com sucesso!";
        } else if (verificarDispositivo.suportaChip === false) {
            this.dispositivosCadastrados.push({
                dispositivo: dispositivo,
                nome: nome,
                numeroTelefone: celular,
            });
            return "Dispositivo cadastrado com sucesso!";
        }
        return "Precisamos de um número de telefone para fazer o cadastro!";
    }
}
