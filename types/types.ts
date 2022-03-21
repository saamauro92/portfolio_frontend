


export interface LandingData {
attributes: LandingAttributes
}


export interface LandingAttributes {

    title: string;
    subtitle: string;
    about: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
}

export interface ProjectPage {
    id: number;
    attributes:ProjectPageAttributes
}

export interface ProjectPageAttributes {
    title: string;
    subtitle: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
}


export interface singleProjectAttributes {
    attributes: {
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt:string;
        image:string;
        url: string;
    }

}
