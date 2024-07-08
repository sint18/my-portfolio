<script lang="ts">
	import ScrollIndicator from "../components/ScrollIndicator.svelte";
	import Showcase from "../components/Showcase.svelte";
</script>
<main>
	<!-- TODO: Get scroll snapping to work -->
	<div class="">
		<div class="container mx-auto px-8 sm:px-20">
			<div class="h-screen relative">
				<div class="sm:pt-56 pt-48">
					<div class="space-y-5">
						<h1 class="text-4xl sm:text-6xl h1">Hi, I am Sint.</h1>
						<p class="text-2xl sm:text-4xl font-semibold">A Software Engineer | Web Developer based in London.</p>
					</div>
				</div>
<!--				<div class="absolute bottom-1/3 sm:bottom-1/4 left-0 w-full">-->
<!--					&lt;!&ndash; TODO: Animate the arrow: show and hide - ease in or out&ndash;&gt;-->
<!--					<ScrollIndicator></ScrollIndicator>-->
<!--				</div>-->
				<div class="absolute bottom-1/3 sm:bottom-1/4 left-0 w-full">
					<!-- TODO: Animate the arrow: show and hide - ease in or out-->
					<ScrollIndicator></ScrollIndicator>
				</div>
			</div>
		</div>
		<div class="bg-primary-50 dark:bg-transparent">
			<Showcase></Showcase>
		</div>
	</div>

</main>
