<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('users/Index', [
            'users' => User::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia(
            'users/Form',
            [
                'user' => new User(),
                'page_settings' => [
                    'title' => 'Add User',
                    'method' => 'post',
                    'url' => route('users.store'),
                ]
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['unique:users', 'required'],
        ]);
        User::create($request->all());

        flashMessage('Saved', 'User created successfully', '👏');

        return to_route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia(
            'users/Form',
            [
                'user' => $user,
                'page_settings' => [
                    'title' => 'Edit User',
                    'method' => 'put',
                    'url' => route('users.update', $user),
                ]
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'email' => ['required', Rule::unique('users')->ignore($user->id)],
        ]);

        flashMessage('Updated', 'User updated successfully', '👏');

        $user->update($request->all());

        return to_route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return to_route('users.index');
    }
}
