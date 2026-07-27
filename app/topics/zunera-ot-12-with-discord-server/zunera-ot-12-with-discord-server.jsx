import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-with-discord-server');
}

export default function ZuneraOt12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-with-discord-server" />;
}
