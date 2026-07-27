import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-with-discord-server');
}

export default function ZuneraOt15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-with-discord-server" />;
}
