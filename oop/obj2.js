// creating a sample object
// create a student object
// 
/**
 * datafield: Name, student id (auto genate), address(mutable option) and email,  class, cgpa, subjects Maths Science and history
 * method: generate the student id, address change, class migration(auto update for  cgpa)
 */

const Subjects = function(maths, science, history){
    this.maths = maths;
    this.science = science;
    this.history = history;
    this.show_marks = () => {
        console.log(`  subjects    | marks \n
                Maths           ${this.maths}\n
                History         ${this.history}\n
                Science         ${this.science}`);
    }
}

function CreateStudent(name, address, email, class_name="first"){
    const student = {
        name,
        address,
        email,
        class_name,
        student_id : generate_id(name,class_name)
    }
    generate_id(name,class_name){
        console.info("generating the student id")
        if(this.name.length < 3){
            throw new Error("name length can not be less than 3 id gerenation faild")
        }
        const name_code = this.name.slice(0,3).trim();
        const class_code = this.class_code.toString().slice(0,1).trim()
        if(!class_code){
            throw new SyntaxError("please check the entered class name. Aborting the id creation");
        }
        const strCode = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        
    }


}

