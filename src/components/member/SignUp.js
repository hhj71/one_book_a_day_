import {Fragment} from "react";

function SignUp() {
    return(
        <Fragment>
            <div class="row">
            <div class="col-lg-8 col-md-8">
            <h3 class="mb-30">Form Element</h3>
            <form action="#">
            <div class="mt-10">
            <input type="text" name="first_name" placeholder="ID" onfocus="this.placeholder = ''" onblur="this.placeholder = 'First Name'" required="" class="single-input"/>
            </div>
            <div class="mt-10">
            <input type="text" name="last_name" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required="" class="single-input"/>
            </div>
            <div class="mt-10">
            <input type="password" name="last_name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required="" class="single-input"/>
            </div>
            <div class="mt-10">
            <input type="password" name="EMAIL" placeholder="Password Check" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required="" class="single-input"/>
            </div>
            </form>
            </div>
            </div>
            </Fragment>
    )
}
export default SignUp;