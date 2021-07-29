<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Authorize Request') }}
        </h2>
    </x-slot>
    <div class="grid grid-cols-7">
        <div class="mt-5 col-span-3 col-start-3">
            <div class="px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg">
                <h3 class="text-lg font-medium text-gray-900">
                    {{ __('Authorization Request') }}
                </h3>
                <div class="mt-3 text-gray-800">
                    <span class="font-semibold">{{ $client->name }}</span> is requesting permission to access your account.
                </div>
                <div>
                    <!-- Scope List -->
                    @if (count($scopes) > 0)
                        <div class="scopes">
                            <p><strong>This application will be able to:</strong></p>
                            <ul>
                                @foreach ($scopes as $scope)
                                    <li>{{ $scope->description }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
    
                    <div class="flex space-x-2 mt-4">
                        <!-- Authorize Button -->
                        <form method="post" action="{{ route('passport.authorizations.approve') }}">
                            @csrf
    
                            <input type="hidden" name="state" value="{{ $request->state }}">
                            <input type="hidden" name="client_id" value="{{ $client->id }}">
                            <input type="hidden" name="auth_token" value="{{ $authToken }}">
                            <x-jet-button>Authorize</x-jet-button>
                        </form>
    
                        <!-- Cancel Button -->
                        <form method="post" action="{{ route('passport.authorizations.deny') }}">
                            @csrf
                            @method('DELETE')
    
                            <input type="hidden" name="state" value="{{ $request->state }}">
                            <input type="hidden" name="client_id" value="{{ $client->id }}">
                            <input type="hidden" name="auth_token" value="{{ $authToken }}">
                            <x-jet-secondary-button>Cancel</x-jet-secondary-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
