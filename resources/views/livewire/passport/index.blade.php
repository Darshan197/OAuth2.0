<x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Auth Credentials') }}
    </h2>
</x-slot>
<div class="grid grid-cols-7">
    <div class="mt-5 col-span-3 col-start-3">
        <div class="bg-white shadow sm:rounded overflow-hidden">
            <div class="bg-gray-50 py-2 px-4 border-b flex justify-between items-center">
                <h3 class="text-lg font-medium text-gray-700">
                    {{ __('OAuth Clients') }}
                </h3>
                <x-jet-button>Create New Client</x-jet-button>
            </div>
            <div class="p-4">
                @if (count($clients) > 0)
                    @foreach ($clients as $client)
                        <span>{{$client->name}}</span>
                    @endforeach
                @else
                    <div>You have not created any OAuth clients.</div>
                @endif
            </div>
            <div id="clients"></div>
        </div>
    </div>
</div>