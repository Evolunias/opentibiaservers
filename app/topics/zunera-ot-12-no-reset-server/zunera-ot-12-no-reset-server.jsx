import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-no-reset-server');
}

export default function ZuneraOt12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-no-reset-server" />;
}
