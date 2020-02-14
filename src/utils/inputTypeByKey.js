const getInputType = (key) => {
    switch (key) {
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