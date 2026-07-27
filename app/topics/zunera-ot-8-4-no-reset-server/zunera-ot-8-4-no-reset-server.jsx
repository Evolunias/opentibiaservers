import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-4-no-reset-server');
}

export default function ZuneraOt84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-4-no-reset-server" />;
}
