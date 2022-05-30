<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::inRandomOrder()->first(),
            'title' => $this->faker->sentence,
            'category' => $this->faker->word,
            'location' => $this->faker->city,
            'time' => $this->faker->time(),
            'date' => $this->faker->date(),
        ];
    }
}
