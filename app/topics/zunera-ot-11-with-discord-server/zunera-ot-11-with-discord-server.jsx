import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-with-discord-server');
}

export default function ZuneraOt11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-with-discord-server" />;
}
