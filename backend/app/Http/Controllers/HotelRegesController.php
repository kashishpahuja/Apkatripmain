<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hotelreguser;
use Illuminate\Support\Facades\Hash;

class HotelRegesController extends Controller
{
    //

    public function getHotelUser(Request $Req)
    {

        $user = hotelreguser::find($Req->id);

        if ($user) {
            return $user;
        } else {
            // Return a response indicating the user was not found
            return response()->json(['message' => 'User not found'], 404);
        }
    }



    public function signupHotel(Request $req)
    {
        $validated = $req->validate([
            'name' => 'required|string|max:25',
            'phone' => 'required',
            'password' => 'required|min:6',
        ]);

        $Alreadyuser = hotelreguser::where("phone", $validated['phone'])->first();

        if ($Alreadyuser) {
            return response()->json(["message" => "Phone Allready exist", "success" => false]);
        }


        $newuser = hotelreguser::create([
            'name' => $validated["name"],
            'phone' => $validated["phone"],
            'password' => $validated["password"],

        ]);

        return  response()->json(["message" => "Signup Success", "success" => true, "info" => $newuser], 201);
    }







    public function loginhotel(Request $req)
    {
        $validated = $req->validate([
            "phone" => "required",
            "password" => "required|min:6"
        ]);

        $userFind = hotelreguser::where("phone", $validated['phone'])->first();

        if (!$userFind) {
            return response()->json([
                "message" => "Enter Valid data",
                "success" => false
            ]);
        }

        $checkpassword = Hash::check($validated["password"], $userFind->password);

        if (!$checkpassword) {
            return response()->json([
                "message" => "Enter Valid data",
                "success" => false
            ]);
        }
        return response()->json([
            "message" => "Login Success",
            "success" => true,
            "info" => $userFind,
        ]);
    }
}
