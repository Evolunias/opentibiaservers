import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-mexico-servers');
}

export default function ZuneraOtMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-mexico-servers" />;
}
