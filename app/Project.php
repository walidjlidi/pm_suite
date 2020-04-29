<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'summary', 'commentary', 'start_date', 'deadline'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
