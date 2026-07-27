import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-discord-sweden');
}

export default function WithTrainersDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-discord-sweden" />;
}
