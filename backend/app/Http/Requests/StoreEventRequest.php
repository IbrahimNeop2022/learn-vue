<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|min:3|max:255',
            'category' => 'nullable|min:3|max:255',
            'description' => 'nullable|min:3',
            'location' => 'nullable|min:3',
            'date' => 'nullable',
            'time' => 'nullable',
        ];
    }

    public function validated($key = null, $default = null)
    {
        return array_merge([
            'user_id' => User::first()->id
        ],
        parent::validated());
    }
}
