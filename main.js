import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
const nuevoestudiante = await prisma.estudiante.create({
    data: {
        nombre: "Aaron",
        pais: "Luxemburgo",
        email: "aaron.picado08@gmail.com"
    }
})
    console.log("Nuevo estudiante creado: ", nuevoestudiante);
    const todosEstudiantes = await prisma.estudiante.findMany();
    console.log("Todos los estudiantes: ");
    console.dir(todosEstudiantes, { depth: null });
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})

.finally(async () => {
    await prisma.$disconnect();
})