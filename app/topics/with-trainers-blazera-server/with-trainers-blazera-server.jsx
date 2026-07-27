import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-blazera-server');
}

export default function WithTrainersBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-blazera-server" />;
}
