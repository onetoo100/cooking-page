export interface IClasses {
    imagen: string
    date: string
    price: string
    content: {
        title: string
        description: string
        text: string
        link: string
    }
}

export const myClasses: IClasses[] = [
    {
        imagen: 'clase1',
        date: '01 / octubre / 2023 18:00 Hrs',
        price: '$400',
        content: {
            title: 'Comida Italiana para principiantes',
            description: 'Aprende las bases de la comida italiana con este curso',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    },
    {
        imagen: 'clase2',
        date: '20 / septiembre / 2023 22:00 Hrs',
        price: '$500',
        content: {
            title: 'Planeación de menús para bodas',
            description: 'Añade la planeación de menús para bodas a tus habilidades.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    },
    {
        imagen: 'clase3',
        date: '30 / septiembre / 2023 08:00 Hrs',
        price: '$200',
        content: {
            title: 'Preparación de pasteles',
            description: 'Aprende a preparar deliciosos postres con este curso.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    },
    {
        imagen: 'clase4',
        date: '01 / noviembre / 2023 06:00 Hrs',
        price: '$1200',
        content: {
            title: 'Comida mexicana',
            description: 'Prepara la mejor comida mexicana con este curso',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    },
    {
        imagen: 'clase5',
        date: '12 / noviembre / 2023 21:00 Hrs',
        price: '$1400',
        content: {
            title: 'Comida de Marruecos',
            description: 'Aprende deliciosas recetas de la comida marroquí',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    },
    {
        imagen: 'clase6',
        date: '12 / diciembre / 2023 21:00 Hrs',
        price: '$1000',
        content: {
            title: 'Ensaladas',
            description: 'Prepara 10 tipos de ensaladas',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus quam odit harum explicabo. Eius a iusto minima voluptas non id obcaecati sit dolorum nulla! Provident unde aliquid fugiat facilis!',
            link: 'Más información'
        }
    }
]