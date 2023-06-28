export interface PersonResponseI {
    id:               number;
    identification:   string;
    first_Name:       string;
    second_Name:      string;
    first_Last_Name:  string;
    second_Last_Name: string;
    place_Of_Birth:   string;
    date_Of_Birth?:    Date;
    nationality:      string;
    sexo:             string;
    marital_Status:   string;
    photo:            string;
    createdDate?:      Date;
    updatedDate?:      Date;
}
