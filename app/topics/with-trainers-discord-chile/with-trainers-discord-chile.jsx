import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-chile');
}

export default function WithTrainersDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-chile" />;
}
