﻿namespace Assets.Scripts.GeneratorPipeline
{
	using UnityEngine;

	public class MarkerTypes
	{
		public static MarkerType Nothing;

		public static MarkerType Wall;

		public static MarkerType Floor;

		public static MarkerType Door;

		static MarkerTypes()
		{
			Nothing = Resources.Load<MarkerType>("MarkerTypes/Nothing");
			Wall = Resources.Load<MarkerType>("MarkerTypes/Wall");
			Floor = Resources.Load<MarkerType>("MarkerTypes/Floor");
			Door = Resources.Load<MarkerType>("MarkerTypes/Door");
		}
	}
}