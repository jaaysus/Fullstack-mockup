<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entry;

class EntryController extends Controller
{
    public function index()
    {
        return Entry::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'age' => 'required|integer',
            'title' => 'required|string',
        ]);

        $entry = Entry::create($validated);
        return response()->json($entry, 201);
    }
}
