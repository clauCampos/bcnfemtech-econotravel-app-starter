export class ExperienceApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getCatalog() {
        return fetch("/experience")
            .then(response => response.json())
    }
}
