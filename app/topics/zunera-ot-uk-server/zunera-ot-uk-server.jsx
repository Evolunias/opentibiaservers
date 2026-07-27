import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-uk-server');
}

export default function ZuneraOtUkServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-uk-server" />;
}
