import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-with-discord-server');
}

export default function ZuneraOt13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-with-discord-server" />;
}
