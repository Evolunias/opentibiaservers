import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-chile');
}

export default function WithScreenshotsDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-chile" />;
}
