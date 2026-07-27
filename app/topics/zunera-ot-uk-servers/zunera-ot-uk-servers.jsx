import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-uk-servers');
}

export default function ZuneraOtUkServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-uk-servers" />;
}
