<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('siteusers', function (Blueprint $table) {
            $table->id();
            $table->string("name",50);
            $table->string("email")->unique();
            $table->string("password");
            $table->boolean("statue")->default(false);
            $table->string("address")->nullable();
            $table->json("other_details")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siteusers');
    }
};