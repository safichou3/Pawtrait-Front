<script>
    /** @type {import('./$types').PageData} */
    export let data = [];
    console.log(data)
</script>

<a href="/api/create">Create</a>

<!--<a href="{data.data.url}"><img src="{data.data.url}" alt=""></a>-->


<ul>
    {#each data.data as dataKey}
        <li>
<!--            <a href="{dataKey.url}">{dataKey.url}</a>-->
            <img src="{dataKey.url}" alt="">
        </li>
    {/each}
</ul>