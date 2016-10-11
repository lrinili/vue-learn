<template>
	<table>
		<thead>
			<tr>
				<th v-for="col in columns">{{col.name|capitalize}}
				</th>
				<th>
					Delete
				</th>
			</tr>
		</thead>
	</table>
</template>