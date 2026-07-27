import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-mexico-server');
}

export default function ZuneraOtMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-mexico-server" />;
}
