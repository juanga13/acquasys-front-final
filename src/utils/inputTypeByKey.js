const getInputType = (key) => {
    switch (key) {
        // students
        case 'id':              return 'number';
        case 'email':           return 'email';
        case 'password':        return 'password';
        case 'dni':             return 'number';
        case 'sex':             return 'sex';  // special type managed in Input
        case 'phoneNumber':     return 'number';
        case 'fatherPhone':     return 'number';
        case 'fatherEmail':     return 'email';
        case 'motherPhone':     return 'number';
        case 'motherEmail':     return 'email';
        case 'affiliateNumber': return 'number';
        case 'birthday':        return 'date';  // special type managed in Input
        case 'verified':        return 'boolean';  // special type managed in Input
        case 'complete':        return 'boolean';

        // lessons
        // case 'id':              return '',
        case 'teachers':        return 'list-teachers';
        case 'weekdays':        return 'list-weekdays';
        // case 'name':            return 'name';
        case 'startDate':       return 'date';
        case 'endDate':         return 'date';
        case 'students':        return 'list-students';
        
        //TODO: fix in back to be a date? 
        // case 'inscriptionDate': return 'date';  // special type managed in Input

        default:
            /*
            All 'name' input types are:
                - name
                - surname
                - avatarUrl
                - fatherName
                - fatherSurname
                - motherName
                - motherSurname
                - socialPlan
                - address
                - role
            */
            return 'name';
    }
}

export default getInputType